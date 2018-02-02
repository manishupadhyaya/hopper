import os
for filename in os.listdir("."):
        os.rename(filename, filename.replace(".png", "_dis.png", 1))
