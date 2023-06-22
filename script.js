const $emoji = document.getElementById ('emoji')
const emoji = []
for (let i= 128512; i<128572; i++) {
    emoji.push (
        `<div class="emoji-item">
            &#${i};
            <p>${i}</p>
        </div>`
    )
}

$emoji.innerHTML += emoji.join ('')


// &#128512;