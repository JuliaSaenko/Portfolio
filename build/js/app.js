"use strict";

const navMain = document.querySelector(`.main-nav`);
const navToggle = document.querySelector(`.main-nav__toggle`);

if (navMain || navToggle) {
  navMain.classList.remove(`main-nav--nojs`);
  navToggle.addEventListener(`click`, function () {
    if (navMain.classList.contains(`main-nav--closed`)) {
      navMain.classList.remove(`main-nav--closed`);
      navMain.classList.add(`main-nav--opened`);
    } else {
      navMain.classList.add(`main-nav--closed`);
      navMain.classList.remove(`main-nav--opened`);
    }
  });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZ1bmN0aW9ucy5qcyJdLCJuYW1lcyI6WyJuYXZNYWluIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwibmF2VG9nZ2xlIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNvbnRhaW5zIiwiYWRkIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFDQSxNQUFBQSxPQUFBLEdBQUFDLFFBQUEsQ0FBQUMsYUFBQSxDQUFBLFdBQUEsQ0FBQTtBQUNBLE1BQUFDLFNBQUEsR0FBQUYsUUFBQSxDQUFBQyxhQUFBLENBQUEsbUJBQUEsQ0FBQTs7QUFFQSxJQUFBRixPQUFBLElBQUFHLFNBQUEsRUFBQTtBQUNBSCxFQUFBQSxPQUFBLENBQUFJLFNBQUEsQ0FBQUMsTUFBQSxDQUFBLGdCQUFBO0FBRUFGLEVBQUFBLFNBQUEsQ0FBQUcsZ0JBQUEsQ0FBQSxPQUFBLEVBQUEsWUFBQTtBQUNBLFFBQUFOLE9BQUEsQ0FBQUksU0FBQSxDQUFBRyxRQUFBLENBQUEsa0JBQUEsQ0FBQSxFQUFBO0FBQ0FQLE1BQUFBLE9BQUEsQ0FBQUksU0FBQSxDQUFBQyxNQUFBLENBQUEsa0JBQUE7QUFDQUwsTUFBQUEsT0FBQSxDQUFBSSxTQUFBLENBQUFJLEdBQUEsQ0FBQSxrQkFBQTtBQUNBLEtBSEEsTUFHQTtBQUNBUixNQUFBQSxPQUFBLENBQUFJLFNBQUEsQ0FBQUksR0FBQSxDQUFBLGtCQUFBO0FBQ0FSLE1BQUFBLE9BQUEsQ0FBQUksU0FBQSxDQUFBQyxNQUFBLENBQUEsa0JBQUE7QUFDQTtBQUNBLEdBUkE7QUFTQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbmNvbnN0IG5hdk1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAubWFpbi1uYXZgKTtcbmNvbnN0IG5hdlRvZ2dsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5tYWluLW5hdl9fdG9nZ2xlYCk7XG5cbmlmIChuYXZNYWluIHx8IG5hdlRvZ2dsZSkge1xuICBuYXZNYWluLmNsYXNzTGlzdC5yZW1vdmUoYG1haW4tbmF2LS1ub2pzYCk7XG5cbiAgbmF2VG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoYGNsaWNrYCwgZnVuY3Rpb24oKSB7XG4gICAgaWYgKG5hdk1haW4uY2xhc3NMaXN0LmNvbnRhaW5zKGBtYWluLW5hdi0tY2xvc2VkYCkpIHtcbiAgICAgIG5hdk1haW4uY2xhc3NMaXN0LnJlbW92ZShgbWFpbi1uYXYtLWNsb3NlZGApO1xuICAgICAgbmF2TWFpbi5jbGFzc0xpc3QuYWRkKGBtYWluLW5hdi0tb3BlbmVkYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5hdk1haW4uY2xhc3NMaXN0LmFkZChgbWFpbi1uYXYtLWNsb3NlZGApO1xuICAgICAgbmF2TWFpbi5jbGFzc0xpc3QucmVtb3ZlKGBtYWluLW5hdi0tb3BlbmVkYCk7XG4gICAgfVxuICB9KTtcbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
