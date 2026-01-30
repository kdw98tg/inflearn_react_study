# servey-pie-server

```
npm install
npm run start
```

명령어를 치면 3001번 포트에서 서버 실행

## API

### surveys

#### `[GET] /surveys`

모든 설문 데이터 조회

##### Success response

```json
[
  {
    "id": 1,
    "title": "명절 선물 선호도 조사",
    "questions": [
      {
        "title": "설날에 받고 싶은 선물은 무엇인가요? (최대 3개)",
        "desc": "특별히 받고 싶은 선물이 없다면 선택하지 말고 넘어가세요.",
        "type": "select",
        "required": false,
        "options": {
          "max": 3,
          "items": ["식품", "전자기기", "도서", "의류", "돈"]
        }
      },
      {
        "title": "추석에 받고 싶은 선물은 무엇인가요?",
        "desc": "특별히 받고 싶은 선물이 없다면 입력하지 말고 넘어가세요.",
        "type": "text",
        "required": false,
        "options": {
          "max": 10,
          "placeholder": "10자 이내로 입력해주세요."
        }
      },
      {
        "title": "입력한 선물을 받고 싶은 이유가 무엇인가요? (필수)",
        "desc": "",
        "type": "textarea",
        "required": true,
        "options": {
          "max": 100,
          "placeholder": "100자 이내로 입력해주세요."
        }
      }
    ]
  }
]
```

---

#### `[POST] /surveys`

설문 생성

##### Body

```json
{
  "title": "설문 제목",
  "questions": [
    {
      "title": "설날에 받고 싶은 선물은 무엇인가요? (최대 3개)",
      "desc": "설명",
      "type": "select", // select, text, textarea
      "required": false, // 필수 여부
      "options": {
        "max": 3,
        "items": ["식품", "전자기기", "도서", "의류", "돈"]
      }
    }
  ]
}
```

---

#### `[GET] /surveys/{surveyId}`

특정 설문 데이터 조회

##### Parameters

| Name     | Type     | Description |
| -------- | -------- | ----------- |
| surveyId | `Number` | 설문 ID     |

##### Success response

```json
{
  "id": 1,
  "title": "명절 선물 선호도 조사",
  "questions": [
    {
      "title": "설날에 받고 싶은 선물은 무엇인가요? (최대 3개)",
      "desc": "특별히 받고 싶은 선물이 없다면 선택하지 말고 넘어가세요.",
      "type": "select",
      "required": false,
      "options": {
        "max": 3,
        "items": ["식품", "전자기기", "도서", "의류", "돈"]
      }
    },
    {
      "title": "추석에 받고 싶은 선물은 무엇인가요?",
      "desc": "특별히 받고 싶은 선물이 없다면 입력하지 말고 넘어가세요.",
      "type": "text",
      "required": false,
      "options": {
        "max": 10,
        "placeholder": "10자 이내로 입력해주세요."
      }
    },
    {
      "title": "입력한 선물을 받고 싶은 이유가 무엇인가요? (필수)",
      "desc": "",
      "type": "textarea",
      "required": true,
      "options": {
        "max": 100,
        "placeholder": "100자 이내로 입력해주세요."
      }
    }
  ]
}
```

---

#### `[PUT] /surveys/{surveyId}`

설문 수정

##### Parameters

| Name     | Type     | Description |
| -------- | -------- | ----------- |
| surveyId | `Number` | 설문 ID     |

##### Body

```json
{
  "title": "설문 제목",
  "questions": [
    {
      "title": "설날에 받고 싶은 선물은 무엇인가요? (최대 3개)",
      "desc": "설명",
      "type": "select", // select, text, textarea
      "required": false, // 필수 여부
      "options": {
        "max": 3,
        "items": ["식품", "전자기기", "도서", "의류", "돈"]
      }
    }
  ]
}
```

---

#### `[DELETE] /surveys/{surveyId}`

설문 삭제

##### Parameters

| Name     | Type     | Description |
| -------- | -------- | ----------- |
| surveyId | `Number` | 설문 ID     |

---

### answers

#### `[GET] /answers?surveyId={surveyId}`

특정 설문 ID에 대한 답변 조회

##### Parameters

| Name     | Type     | Description |
| -------- | -------- | ----------- |
| surveyId | `Number` | 설문 ID     |

##### Success response

```json
[
  {
    "surveyId": 1,
    "data": [[0], [0], [0], [0], [0]],
    "id": 1
  }
]
```

---

#### `[POST] /answers`

특정 설문 ID에 대한 답변 조회

##### Body

```json
{
  "surveyId": "{surveyId: String}",
  "data": "{answerData: Array}"
}
```

##### Success response
