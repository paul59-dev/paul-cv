const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const frontend = entry.target.querySelector('.frontend_progress');
  
      if (entry.isIntersecting) {
        frontend.classList.add('frontend');
        return; // if we added the class, exit the function
      }
  
      // We're not intersecting, so remove the class!
      frontend.classList.remove('frontend');
    });
});

observer.observe(document.querySelector('.fp'));


const observer_2 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const backend = entry.target.querySelector('.backend_progress');
  
      if (entry.isIntersecting) {
        backend.classList.add('backend');
        return; // if we added the class, exit the function
      }
  
      // We're not intersecting, so remove the class!
      backend.classList.remove('backend');
    });
});
  
observer_2.observe(document.querySelector('.bp'));


const observer_3 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const frame_fp = entry.target.querySelector('.frame_frontend_progress');

    if (entry.isIntersecting) {
      frame_fp.classList.add('frame_fp');
      return; // if we added the class, exit the function
    }

    // We're not intersecting, so remove the class!
    frame_fp.classList.remove('frame_fp');
  });
});

observer_3.observe(document.querySelector('.frame_fp'));


const observer_4 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const frame_bp = entry.target.querySelector('.frame_backend_progress');

    if (entry.isIntersecting) {
      frame_bp.classList.add('frame_bp');
      return; // if we added the class, exit the function
    }

    // We're not intersecting, so remove the class!
    frame_bp.classList.remove('frame_bp');
  });
});

observer_4.observe(document.querySelector('.frame_bp'));


const observer_5 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const software = entry.target.querySelector('.software_progress');
  
      if (entry.isIntersecting) {
        software.classList.add('software');
        return; // if we added the class, exit the function
      }
  
      // We're not intersecting, so remove the class!
      software.classList.remove('software');
    });
});
  
observer_5.observe(document.querySelector('.sp'));


const observer_6 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const cmd = entry.target.querySelector('.cmd_progress');
  
      if (entry.isIntersecting) {
        cmd.classList.add('cmd');
        return; // if we added the class, exit the function
      }
  
      // We're not intersecting, so remove the class!
      cmd.classList.remove('cmd');
    });
});
  
observer_6.observe(document.querySelector('.cmd'));


let img_prg = document.getElementById('img_prg');
let prg = document.getElementById('prg');
let img_mq = document.getElementById('img_mq');
let mq = document.getElementById('mq');
let img_ml = document.getElementById('img_ml');
let ml = document.getElementById('ml');

img_prg.addEventListener('mouseover', () => {

    prg.style.display = "block";

});

img_prg.addEventListener('mouseout', () => {

    prg.style.display = "none";

});

img_mq.addEventListener('mouseover', () => {

    mq.style.display = "block";

});

img_mq.addEventListener('mouseout', () => {

    mq.style.display = "none";

});

img_ml.addEventListener('mouseover', () => {

    ml.style.display = "block";

});

img_ml.addEventListener('mouseout', () => {

    ml.style.display = "none";

});

// function download(filename, textInput) {

//   const element = document.createElement('a');
//   element.setAttribute('href','data:text/plain;charset=utf-8, ' + encodeURIComponent(textInput));
//   element.setAttribute('download', filename);
//   document.body.appendChild(element);
//   element.click();

// }

// const cv = document.getElementById('cv');

// cv.addEventListener("click", function () {
//   const filename = "../download/cv-Paul_Allebee.pdf";
//   download(filename);
// }, false);