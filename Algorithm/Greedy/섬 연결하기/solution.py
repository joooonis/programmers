def find(parent, node):
    if parent[node] == node:
        return node
    parent[node] = find(parent, parent[node])
    return parent[node]


def union(parent, a, b):
    root_a = find(parent, a)
    root_b = find(parent, b)
    if root_a != root_b:
        parent[root_b] = root_a


def solution(n, costs):
    # 비용을 기준으로 정렬
    costs.sort(key=lambda x: x[2])

    # 각 섬의 부모 노드를 저장하는 배열
    parent = [i for i in range(n)]

    min_cost = 0  # 최소 비용

    for cost in costs:
        island1, island2, bridge_cost = cost
        if find(parent, island1) != find(parent, island2):
            union(parent, island1, island2)
            min_cost += bridge_cost

    return min_cost
