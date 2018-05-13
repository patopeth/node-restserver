const jwt = require('jsonwebtoken');
//=====================
//Verificar Token
//
//

let verificaToken = (req, res, next) => {

    let token = req.get('token');

    jwt.verify(token, process.env.SEED, (err, decoded) => {

        if (err) {
            return res.status(401).json({
                ok: false,
                err: {
                    message: 'token no válido'
                }
            });
        }

        req.usuario = decoded.usuario;
        next();
        //si no llamo el next jamas se ejecutará el resto del codigo del get usuario
    })
};

let verificarAdminRol = (req, res, next) => {

    let user = req.usuario;

    console.log(user.role);
    if (user.role === 'ADMIN_ROLE') {
        next();

    } else {
        return res.json({
            ok: false,
            err: {
                message: 'El usuario no es Admin'
            }
        });

    }

}


module.exports = {
    verificaToken,
    verificarAdminRol
}