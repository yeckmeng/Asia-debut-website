document.addEventListener('DOMContentLoaded', function () {
    // Function to close all dropdown menus
    function closeAllDropdowns() {
        var dropdownMenus = document.querySelectorAll('.dropdown-menu');
        dropdownMenus.forEach(function (menu) {
            menu.classList.remove('show');
        });
    }

    // Function to toggle dropdown menu
    function toggleDropdown(dropdownToggleId, dropdownMenuId) {
        var dropdownToggle = document.getElementById(dropdownToggleId);
        dropdownToggle.addEventListener('click', function () {
            var dropdownMenu = document.getElementById(dropdownMenuId);
            if (dropdownMenu.classList.contains('show')) {
                dropdownMenu.classList.remove('show');
            } else {
                closeAllDropdowns(); // Close all dropdowns before opening the clicked one
                dropdownMenu.classList.add('show');
            }
        });
    }

    // Call the function for Services dropdown
    toggleDropdown('servicesDropdownList', 'servicesDropdown');

    // Call the function for FAQ dropdown
    toggleDropdown('faqDropdownList', 'faqDropdown');
});
