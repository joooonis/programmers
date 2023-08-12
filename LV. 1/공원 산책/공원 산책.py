def is_valid_move(y, x, H, W):
    return 0 <= y < H and 0 <= x < W

def is_obstacle(park, y, x):
    return park[y][x] == 'X'

def is_valid_command(park, y, x, direction, distance):
    H = len(park)
    W = len(park[0])
    dy = {'N': -1, 'S': 1, 'W': 0, 'E': 0}
    dx = {'N': 0, 'S': 0, 'W': -1, 'E': 1}

    for _ in range(distance):
        new_y, new_x = y + dy[direction], x + dx[direction]
        if not is_valid_move(new_y, new_x, H, W) or is_obstacle(park, new_y, new_x):
            return False
        y, x = new_y, new_x

    return True

def solution(park, routes):
    H = len(park)
    W = len(park[0])
    dy = {'N': -1, 'S': 1, 'W': 0, 'E': 0}
    dx = {'N': 0, 'S': 0, 'W': -1, 'E': 1}

    y, x = 0, 0
    
    for i in range(len(park)):
        for j in range(len(park[0])):
            if park[i][j] == 'S':
                y, x = i, j

    for route in routes:
        direction, distance = route.split()
        distance = int(distance)
        if is_valid_command(park, y, x, direction, distance):
            y += dy[direction] * distance
            x += dx[direction] * distance

    return [y, x]