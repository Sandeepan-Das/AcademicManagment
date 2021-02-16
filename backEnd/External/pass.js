const bcryptjs = require('bcryptjs');
const pass_hide = async (password)=>{
    const hidden = await bcryptjs.hash(password,8)
    
    return hidden;
}

module.exports = pass_hide;