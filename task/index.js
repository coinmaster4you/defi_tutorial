let {PythonShell} = require('python-shell')
const task = require('../task.config')
function run() {
    for(var key in task) {
        let options = {
            mode:"text",
            pythonOptions: ['-u'],
            args: task.clean
        }
        if(task.hasOwnProperty(key)) {
            if(key === "clean")
                PythonShell.run("./task/cleaner.py", options, function(err) {
                    if (err) throw err;
                    console.log('finished');
                })
        }
    }

}

try{
   run()
} catch(e) {
    console.error("No file? check error:", e)
}
      
    

