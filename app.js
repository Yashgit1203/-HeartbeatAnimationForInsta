// Like a Post

let pst = document.querySelectorAll('.c-post');
let like = document.querySelectorAll('.f-left i');

    const j = 3; // Calculate the value of j based on i
    const k = 0;
// For post like popup

        let lastTapTime = 0;
        const delay = 300; // Adjust this value to set the maximum delay between taps

        pst[0].children[0].addEventListener('click', function(event) {
            const currentTime = new Date().getTime();
            const tapTimeDiff = currentTime - lastTapTime;

            if (tapTimeDiff < delay) {
                // This is considered a double tap
                // Perform actions for double-tap here
                pst[0].children[1].style.opacity = 1;
                pst[0].children[1].style.animation = 'like2 ease 1000ms';
                setTimeout(function(){
                    pst[0].children[1].style.opacity = 0;
                    pst[0].children[1].style.animation = 'none';
                },1000);
    
                    if (j >= 3 && j < like.length) {
                        like[j].style.animation = 'like ease 500ms';
                        like[k].style.visibility = 'hidden';
                        setTimeout(function () {
                            like[j].style.animation = 'none';
                        }, 500);
                        like[j].style.transform = 'scale(1)';
                    }
            }

            lastTapTime = currentTime;
        });

//For Like button

        if (j >= 3 && j < like.length) {
            like[j].addEventListener("click",()=>{
                like[j].style.transform = 'scale(0)';
                like[j].style.animation = 'none';
                like[k].style.visibility = 'visible';
            });
            like[k].addEventListener("click",()=>{
                like[j].style.animation = 'like ease 500ms';
                like[j].style.transform = 'scale(1)';
                like[k].style.visibility = 'hidden';
            });
        }


