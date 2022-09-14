const labels = document.querySelectorAll('.form-control label')
labels.forEach(label => {
    label.innerHTML = label.innerText.split('')
    .map((value, idx) => `<span style="transition-delay: ${idx *50}ms">${value}</span>`)
    .join('')
})