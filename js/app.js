


const clock = document.querySelector(".clock")
        const day = document.querySelector(".day")
        const kun = document.querySelector(".date")
        const millisecond = document.querySelector(".millisecond");

            function soat(){
                let date = new Date()
                let hour = date.getHours().toString().padStart(2, "0")
                let minute = date.getMinutes().toString().padStart(2, "0")
                let second = date.getSeconds().toString().padStart(2, "0")
                // let millisecond = date.getMilliseconds().toString().padStart(2, "0")
                // let day = date.getDay()
                clock.textContent = `${hour}:${minute}:${second}`;
                // millisecond.textContent = `${millisecond}`
            }
            soat()
            setInterval(()=>{
                soat()
            },100);
        
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        const weeks = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        function vaqt(){
            let date = new Date()
            let day = date.getDate()
            let month = date.getMonth()
            let year = date.getFullYear()
            let kun = date.getDate()

            day.textContent = `${month[month]}`;
            kun.textContent = `${month} ${kun}, ${year}`;
        }
        vaqt()
        setInterval(()=>{
            vaqt()
        },100);
