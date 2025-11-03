const obj = {
    nextLevel:{courseId: "level2"},
    
    // we can't access this with dot notation
    "programming hero": {courseId: 'level1'} 
}

console.log(obj["programming hero"])