
    const buttons = document.querySelectorAll('.btn');
    const imagesContent = document.querySelectorAll('.image-content');

    buttons.forEach((button) => {
        button.addEventListener('click',(ev) => {
            ev.preventDefault();
            const filter = ev.target.dataset.filter

            imagesContent.forEach((item) => {
                if (filter === 'all'){
                    item.style.display = 'block';
                } else {
                    if (item.classList.contains(filter)) {
                        item.style.display = 'block';
                    }else{
                        item.style.display = 'none';
                    }
                }
            })
        })
    })


    /* const buttons = document.querySelectorAll('.btn');
    const imagesContent = document.querySelectorAll('.image-content');

    buttons.forEach((button) => {
        button.addEventListener('click',(ev) => {
            ev.preventDefault();
            const filter = ev.target.dataset.filter

            imagesContent.forEach((item) => {
                if (filter === 'all'){
                    item.style.display = 'block';
                } else {
                    if (item.classList.contains(filter)) {
                        item.style.display = 'block';
                    }else{
                        item.style.display = 'none';
                    }
                }
            })
        })
    })




 */