var points = ['green', 'red', 'blue', 'pink', 'yellow']
container = document.getElementById('container')

for (var index in points) {
    var hh = document.createElement('div')
    hh.classList.add('box')
    hh.classList.add(points[index])
    hh.innerText = points[index]
    container.appendChild(hh)
    if ((index % 2) != 0) { hh.classList.add('circle') }
}