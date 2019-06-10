angular.module('shop', []).controller('list', function($scope) {
	var vm = this;
	vm.productType;
	vm.searchedContent;
	vm.sortType;
	// vm.selectedCategoryNumber = 0;
	vm.ifChecked = true;
	vm.categoryArray =[];
    vm.categoryOptions = data.categoryOptions;
    vm.items = data.items;
    vm.selectedCategoryNumber = vm.categoryOptions.length;
    vm.productNumber = vm.items.length;
    vm.showSearch = true;
    // vm.onsearching = false;
    vm.windowSize = 0;

   /**
    * filtering by pet type
    * @param {string} type The pet type
    */
    vm.selectType = function(type) {
    	vm.productType = type;
        vm.productNumber = 0;
        for(var i = 0; i < vm.items.length; i++)
        {
            if(vm.items[i].type === type) {
                vm.productNumber++;
            }
        }
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
            for(var i = 0; i < vm.items.length; i++)
            {
                if(vm.items[i].category === changedCategory) {
                    vm.productNumber++;
                }
            }
    	} else {
    		vm.selectedCategoryNumber--;
    		vm.categoryArray.splice(vm.categoryArray.indexOf(changedCategory), 1);
            for(var i = 0; i < vm.items.length; i++)
            {
                if(vm.items[i].category === changedCategory) {
                    vm.productNumber--;
                }
            }
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
        vm.productNumber = vm.items.length;
    };

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

    vm.showSearch = function() {
        document.querySelector("#searchBar").classList.toggle("showClass");
    }
});