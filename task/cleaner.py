import shutil
import os
if os.path.isdir("dist"):
  shutil.rmtree("dist")
  print("deletion done")
else:
  print("The folder does not exist")
  
