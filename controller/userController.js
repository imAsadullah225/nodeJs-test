const users = [{
    id: 1,
    username: "asad"
}, {
    id: 2,
    username: "zeeshan"
}]

exports.getUsers = async function (req, res) {

    try {

        res.json({
            users
        })

    } catch (error) {

        res.json({
            message: "error"
        })

    }

}

exports.addUser = async function (req, res) {

    try {

        if (req.body.username == "" || req.body.email == "" || req.body.password == "") {
            return res.json({
                message: "error"
            })
        }

        res.json({
            message: "success"
        })



    } catch (error) {

        res.json({
            message: "error"
        })

    }


}

exports.getUser = async function (req, res) {

    try {

        if (req.params.id == "") {
            return res.json({
                message: "error"
            })
        }

        res.json({
            users: users.filter(val => req.params.id == val.id)
        })

    } catch (error) {

        res.json({
            message: "error"
        })

    }


}