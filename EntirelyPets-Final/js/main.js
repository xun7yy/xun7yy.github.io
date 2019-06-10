angular.module('shop', []).controller('list', function($scope) {
	var vm = this;
	vm.productType;
	vm.searchedContent;
	vm.sortType;
	vm.ifChecked = true;
	vm.categoryArray =[];
    vm.categoryOptions = data.categoryOptions;
    vm.items = data.items;
    vm.selectedCategoryNumber = vm.categoryOptions.length;
    vm.showSearch = true;
    vm.windowSize = 0;

   /**
    * filtering by pet type
    * @param {string} type The pet type
    */
    vm.selectType = function(type) {
    	vm.productType = type;
    };

   /**
	* filtering by product category
	* @param {object} item The item Object
	* @return true if related category is selected
    */
    vm.setCategory = function(item) {
    	return (vm.categoryArray.indexOf(item.category) >= 0);
    };

   /**
    * update the number of selected categories
    * @param {boolen} isChecked true if the category is checked
    * @param {string} changedCategory the category name
    */
    vm.updateSelectedCategories = function(isChecked, changedCategory) {
    	if (isChecked == null) {
    		return;
    	}
    	if (isChecked) {
    		vm.selectedCategoryNumber++;
    		vm.categoryArray.push(changedCategory);
    	} else {
    		vm.selectedCategoryNumber--;
    		vm.categoryArray.splice(vm.categoryArray.indexOf(changedCategory), 1);
    	}
    };

   /**
    * reset all filters
    */
    vm.reset = function() {
    	delete vm.productType;
		delete vm.searchedContent;
		delete vm.sortType;
		vm.categoryArray = [];

		for (var i = 0; i < vm.categoryOptions.length; i++) {
			var option = vm.categoryOptions[i];
			vm.categoryArray.push(option.categoryName);
			option.isChecked = true;
    	}
    	vm.selectedCategoryNumber = vm.categoryOptions.length;
    };
    /**
    * show / hide search bar on smaller screens
    */
    vm.showSearch = function() {
        document.querySelector("#searchBar").classList.toggle("showClass");
    }
   /**
    * initialize variables
    */
    vm.init = function() {
    	for (var i = 0; i < vm.categoryOptions.length; i++){
    		var option = vm.categoryOptions[i];
    		vm.categoryArray.push(option.categoryName);
    	}
    };

    vm.init();

    
});