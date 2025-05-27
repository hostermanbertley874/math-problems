def calculate_area(shape, dimensions):
    if shape == "rectangle":
        width, height = dimensions
        area = width * height
        return f"The area of the rectangle with dimensions {width}x{height} is {area}."
    elif shape == "circle":
        radius = dimensions[0]
        area = 3.14159 * (radius ** 2)
        return f"The area of the circle with a diameter of {radius} is {area}."
    else:
        return "Invalid shape."
