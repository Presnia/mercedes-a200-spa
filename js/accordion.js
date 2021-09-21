const featureLinks = document.querySelectorAll('.feature__link');
const featureLists = document.querySelectorAll('.feature-sub');

featureLinks.forEach((item, index) => {
  item.addEventListener('click', () => {
    featureLinks.forEach((item) =>
      item.classList.remove('feature__link_active')
    );

    item.classList.add('feature__link_active');

    featureLists.forEach((listItem) => listItem.classList.add('hidden'));

    featureLists[index].classList.remove('hidden');
  });
});
