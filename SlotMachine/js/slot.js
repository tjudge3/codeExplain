    let icons = ['savings', 'favorite', 'attach_money', 'bolt', 'star'];
    let colors = ['green', 'white', 'silver'];
    let snd = new Audio("sounds/slot.wav");

    function spin() {
        let tally = [0, 0, 0, 0, 0]; /* add later */
        let iLen = icons.length;
        let slot = document.getElementById("divSlot");
        winner(false);
        snd.play();
        slot.querySelectorAll('*').forEach(n => n.remove());

        for (let x = 1; x <= iLen; x++) {
            let i = document.createElement("i");
            let rnd = Math.floor((Math.random() * 5));
            let rndColor = Math.floor((Math.random() * colors.length));
            i.classList = "material-icons iSlot";
            i.textContent = icons[rnd];
            i.style.color = colors[rndColor];
            slot.appendChild(i);
            tally[rnd] += 1; /* add later */
        }

        setTimeout(function() {
            checkForWin(tally);
        }, 2000);
    }

    function checkForWin(w) {
        let wLen = w.length - 1;

        for (let x = 0; x <= wLen; ++x) {
            if (w[x] > 2) {
                winner(true);
                return;
            }
        }
    }

    function winner(blnWin) {
        let winner = document.querySelector("#winner");
        winner.style.display = (blnWin == true ? 'block' : 'none');
    }