let arrayResponses = Array.from(
  document.querySelectorAll(
    '.questions__list-item-response'
  )
);
let arrayButtons =
  document.getElementsByClassName(
    'questions__list-buttons'
  );
let arrayButtonsClose =
  document.getElementsByClassName(
    'questions__list-item-response-button'
  );
let arrayResponsesActive = [];
for (let i = 0; i < arrayButtons.length; i++) {
  arrayButtons[i].addEventListener(
    'click',
    function () {
      arrayResponses.find((item, index) => {
        if (i === index) {
          item.classList.remove(
            'questions__list-item-response'
          );
          item.classList.add(
            'questions__list-item-response-visible'
          );
          arrayResponsesActive.push(item);
        }
        if (
          index === i &&
          arrayResponsesActive.length === 2
        ) {
          arrayResponsesActive[0].classList.remove(
            'questions__list-item-response-visible'
          );
          arrayResponsesActive[0].classList.add(
            'questions__list-item-response'
          );
          arrayResponsesActive.shift();
        }
      });
    }
  );
}
for (
  let i = 0;
  i < arrayButtonsClose.length;
  i++
) {
  arrayButtonsClose[i].addEventListener(
    'click',
    function () {
      arrayResponses.find((item, index) => {
        if (i === index) {
          item.classList.remove(
            'questions__list-item-response'
          );
          item.classList.add(
            'questions__list-item-response-visible'
          );
          arrayResponsesActive.push(item);
        }
        if (
          index === i &&
          arrayResponsesActive.length === 2
        ) {
          arrayResponsesActive[0].classList.remove(
            'questions__list-item-response-visible'
          );
          arrayResponsesActive[0].classList.add(
            'questions__list-item-response'
          );
          arrayResponsesActive.shift();
        }
      });
    }
  );
}
