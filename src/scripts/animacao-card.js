// const cards = document.querySelectorAll('.card');

//     const cardObserver = new IntersectionObserver(entries => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 entry.target.classList.remove('hidden');
//                 if (entry.intersectionRatio >= 0.5) {
//                     entry.target.classList.add('fadeInLeftBig');
//                 } else {
//                     entry.target.classList.add('fadeInRightBig');
//                 }
//             } else {
//                 if (entry.intersectionRatio >= 0.5) {
//                     entry.target.classList.remove('fadeInLeftBig');
//                 } else {
//                     entry.target.classList.remove('fadeInRightBig');
//                 }
//                 entry.target.classList.add('fadeOutLeft');
//             }
//         });
//     }, { threshold: 0.5 });

//     cards.forEach(card => {
//         cardObserver.observe(card);
//     });