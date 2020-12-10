var data = [
    {"title":"배움의 원칙", "content":"거꾸로캠퍼스가 실현하는 21세기 배움의 원칙 아홉 가지", "plus":"자세히보기->"},
    {"title":"교육과정", "content":"거꾸로캠퍼스 교육과정과 교육 프로그램에 대한 안내", "plus":"자세히보기->"},
    {"title":"학교생활", "content":"거꾸로캠퍼스를 만들어가는 학생과 교사들의 이야기", "plus":"자세히보기->"}
]

for (var index in data) {
    var hh = document.createElement('div')
    hh.classList.add('titlehtml')
    hh.innerText = data[0]["title"]
    box1.appendChild(hh)

    var hh = document.createElement('div')
    hh.classList.add('contenthtml')
    hh.innerText = data[1]["content"]
    box1.appendChild(hh)

    var hh = document.createElement('div')
    hh.classList.add('plushtml')
    hh.innerText = data[0]["plus"]
    box1.appendChild(hh)
}

// for (var index in data){
//     var hhh = document.createElement('div')
//     hhh.classList.add('titlehtml')
//     hhh.innerText = data[0]["title"]
// }