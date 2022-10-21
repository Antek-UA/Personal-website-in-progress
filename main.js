// Projects
// $(document).ready(function () {
//   $('.projects__btn').click(function () {
//       const value = $(this).attr('data-filter');
//       if(value == 'all') {
//           $('.projects__item').show('6000');
//       }
//       else {
//           $('.projects__item').not('.'+value).hide('6000');
//           $('.projects__item').filter('.'+value).show('6000')
//       }
//       speed:500;
//   })
//    // add active class on btn
//   $('.projects__btn').click(function() {
//   $(this).addClass('active').siblings().removeClass('active');
//   })
//   $('.projects__list').mixItUp({});

//   function mixClear() {
//     setTimeout(function() {
//       $('.projects__list').removeClass('waypoint');
//     }, 2000);
//   }
// })   

const button = document.querySelector('.projects__buttons'),
      galery = document.querySelectorAll('.projects__item');

window.onload = () => { // once window loaded
  button.onclick = (selectedItem) => {  //when user click on button div 
    if(selectedItem.target.classList.contains('projects__btn')) { // if user click element has .projects__btn class
      button.querySelector('.active').classList.remove('active'); // remove the active class which is in the first element
      selectedItem.target.classList.add('active'); // add that aactive class on the user selected
      let activeBtn = selectedItem.target.getAttribute("data-name"); //getting data-name value of the user selected item
      galery.forEach((image) => {
        let activeImg = image.getAttribute('data-name'); //getting image data-name value
        // if user selected item data-name value is equal to image data-name value
        //or user selected item data-name value is equal to "all"
        if((activeImg == activeBtn) || activeBtn == 'all') {
          image.classList.remove('hide');
          image.classList.add('show');
        } else {
          image.classList.add('hide');
          image.classList.remove('show');
        }
      })
    }
  }
}      