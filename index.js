

// For open and close of the trigger menu....

function app() {

  const menuTrigger = document.querySelector('#profile-menu');

 const menu = document.querySelector('#profile-menu-content');


 const allMenuItems = menu.querySelectorAll('[role="menuitem"]')



  function closeMenu() {
    menuTrigger.ariaExpanded = 'false';
    menuTrigger.focus();
  }


  function handleMenuEscapeKeyPress(event) {
    if (event.key === 'Escape') {
      toggleMenu();
    }
  }


  function handleMenuItemArrowKeyPress(event, menuItemIndex) {

    const isLastMenuItem = menuItemIndex === allMenuItems.length -1;
    const isFirstMenuItem = menuItemIndex === 0;


    const nextMenuItem = allMenuItems.item(menuItemIndex + 1);
    const previousMenuItem = allMenuItems.item(menuItemIndex - 1);

    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
      
      if (isLastMenuItem) {
        allMenuItems.item(0).focus();

        return;
      }

      nextMenuItem.focus()
    }
    

    if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') {
      if (isFirstMenuItem) {
        allMenuItems.item(allMenuItems.length - 1).focus()

        return;
      }

      previousMenuItem.focus();
    }

    
  }


  function openMenu() {  
    menuTrigger.ariaExpanded = 'true';
    allMenuItems.item(0).focus();

    menu.addEventListener('keyup', handleMenuEscapeKeyPress);



    allMenuItems.forEach(function (menuitem, menuItemIndex) {
      menuitem.addEventListener('keyup', function(event) {
        handleMenuItemArrowKeyPress(event, menuItemIndex); 
      })
    })

  }



 


  function toggleMenu() {
    const isExpanded = menuTrigger.attributes['aria-expanded'].value === 'true';

    menu.classList.toggle('menu-active');

    
    if (isExpanded) {
     closeMenu()
    } else {
    openMenu()
    }
  }

  // Event listener.......

  menuTrigger.addEventListener('click', toggleMenu);

}

app();


