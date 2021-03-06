### HTML의 구조
~~~
<html>

<head> head와 body가 html의 자식으로 들어감, 

         문서 자체를 설명하는 것들이 head태그의 자식으로 들어감

</head> 

<body>  head와 body는 형제관계, html에 들어가는 정보는 body태그의 자식으로 들어감

</body>

</html>
~~~

---

### 디딤영상 git 1-2

[https://www.youtube.com/watch?v=2z2-2jUV7-Q&feature=youtu.be](https://www.youtube.com/watch?v=2z2-2jUV7-Q&feature=youtu.be)

### Git

- 파일에서 발생한 변경사항을 추적하는 시스템
- 데스크탑에 저장하거나, 클라우드 저장하거나
- 팀원간의 공유 및 공동 작업에 용이
- 중요 키워드

    Repositories
    저장 폴더 (그걸 추적하는 시스템이 Git)

    Commits
    변경 사항을 저장하고 싶을때. 기록을 남길수 있음

    Branches
    실험적인 작업을 하고 싶을때 곁가지를 만들어서 작업을 하는 것

### Git과 Github

- Git 변경 사항을 추적하는 시스템
- Github 이러한 변경사항을 저장할 수 있는 클라우드 서비스

---

### 인터넷과 웹 2-1

[https://www.youtube.com/watch?v=gCjTZazFZZo&feature=youtu.be](https://www.youtube.com/watch?v=gCjTZazFZZo&feature=youtu.be)

### 인터넷의 시작

1. 1960년대 세계 2차대전을 통해 핵전쟁에 대한 공포가 컸음
2. 인터넷이 파괴된다면 기밀들이 파괴됨
3. 분산으로 통신이 가능하게 되면 몇개가 파괴되더라도 통신이 가능해짐
4. 이런 기능들을 할 수 있게 한 것이 인터넷
    1. 연구및 군사 목적으로만 쓰임
5. 1990년대 프로그램 개발
    1. 한 대에는 웹 서버
        1. index.html 파일이 있음
    2. 다른 한 대는 웹 브라우저
        1. 인터넷을 통해 웹 서버에게 index.html 요청해 전달 받음
        2. 이를 해석하여 사람이 볼 수 있는 형태로 보여줌
6. WWW 개발

---

### 인터넷은 어떻게 동작할까? 2-2

[https://www.youtube.com/watch?v=ltP8pQPgaNw&feature=youtu.be](https://www.youtube.com/watch?v=ltP8pQPgaNw&feature=youtu.be)

### Interner journey

웹주소 -> DNS -> IP -> 패킷

1. DNS에 따라 IP 주소로 바뀜
    1. 사람이 이해할 수 있는 주소를 입력
    2. 그것을 Ip주소로 바꿔주는 기술
    3. 그 주소에 해당하는 웹서버에 접근
2. IP라는 규칙에 따라 데이터가 Packet 형태로 나눠서 해당하는 웹 서버가 있는 네트워크로 가게 됨
    1. IP라는 규칙에 따라 받는 사람과 보내는 사람의 주소를 적고
    2. 원하는 웹서버의 네트워크에 접속하게 분리?
3. 도달한 후 브로드퀘스트에 따라서 물리적 주소를 받아와서 해당하는 물리적 주소(렘카드 기기명)가 있는 컴퓨터에 접근, 원하는 정보를 가져옴
    1. 컴퓨터에 접근하면 웹서버로서 역할을 하는 프로그램에 접근하기 위한 규칙 → TCP(전송계층) 포트
