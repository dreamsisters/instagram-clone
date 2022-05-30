# REST API

HTTP 요청 리스트(ajax)

### GET /posts

- 내 포스트 목록을 가져옴
- return: IPost[]

### GET /posts/:id

- :id 포스트 가져옴
- return: IPost

### GET /directs/:id/chats

- :id와 나눈 dm을 가져옴
- query: { perPage: number(한 페이지 당 몇 개), page: number(페이지) }
- return: IDM[]

### GET /directs/:id/unreads

- :id가 보낸 안 읽은 채팅 수를 가져옴.
- query: { after: Timestamp }
- return: number
-

### POST /directs/:id/chats

- :id와 나눈 dm을 저장
- body: { content: string(내용) }
- return: 'ok'
- dm 소켓 이벤트가 emit됨

### POST /directs/:id/images

- :id에게 보낸 이미지 저장
- body: { image: 이미지(multipart) }
- return: 'ok'
- dm 소켓 이벤트가 emit됨
-

### POST /directs/:id/videos

- :id에게 보낸 동영상 저장
- body: { video: 이미지(multipart) }
- return: 'ok'
- dm 소켓 이벤트가 emit됨

### GET /users/me

- 내 로그인 정보를 가져옴, 로그인되어있지 않으면 false
- return: IUser | false

### POST /users

- 회원가입
- body: { email: string(이메일), name: string(성명), nickname: string(닉네임), password: string(비밀번호), phone: string(전화번호), gender: string(성별), birth: number(생년월일) }
- return: 'ok'

### POST /users/login

- 로그인
- body: { email: string(이메일), nickname: string(닉네임), phone: string(전화번호), password: string(비밀번호) }
- return: IUser

### POST /users/logout

- 로그아웃
- return: 'ok'
