document.addEventListener('DOMContentLoaded', function () {
    // Get the Services dropdown link
    var servicesDropdown = document.getElementById('servicesDropdownList');

    // Add click event listener to the Services dropdown link
    servicesDropdown.addEventListener('click', function () {
        // Toggle the dropdown-menu
        var servicesDropdownMenu = document.getElementById('servicesDropdown');
        if (servicesDropdownMenu.classList.contains('show')) {
            servicesDropdownMenu.classList.remove('show');
        } else {
            servicesDropdownMenu.classList.add('show');
        }
    });
});
