bㅠㅠ# queue

파이선에서 queue 자료구조를 사용하기 위해서는 `from collections import deque`
와 같이 선언해줍니다.

`queue = deque([1,2,3,4,5])`

와 같이 queue를 만들고 `popleft()`, `popright()` method를 사용할 수 있습니다.

list를 사용하여 `pop(0)`를 할 경우 전체 복사가 이루어지기 때문에 O(n)의 시간이 걸려서 비효율적입니다.

# 결과

정확성 : 60.0  
합계 : 60.0 / 100/0
