def solution(routes):
    routes.sort(key=lambda x: x[1])
    camera_count = 1
    camera_position = routes[0][1]

    for route in routes:
        start, end = route
        if camera_position < start:
            camera_count += 1
            camera_position = end

    return camera_count
