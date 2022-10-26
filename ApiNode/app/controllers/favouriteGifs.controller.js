const db = require("../models");
const favouriteGif = db.favouriteGift;
const Op = db.Sequelize.Op;

// Create and Save a new FavouriteGif
exports.create = (req, res) => {
    // Validate request
    if (!req.body.title) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    // Create a FavouriteGif
    const FavouriteGif = {
        id: req.body.id,
        title: req.body.title,
        url: req.body.url,
        createdAt: "",
        updatedAt: ""
    };
    
    // Save FavouriteGif in the database
    favouriteGif.create(FavouriteGif)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the FavouriteGif."
            });
        });
};

// Retrieve all FavouriteGifs from the database.
exports.findAll = (req, res) => {
    const title = req.query.title;
    var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

    favouriteGif.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving FavouriteGifs."
            });
        });
};

// Find a single FavouriteGif with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    favouriteGif.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find FavouriteGif with id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving FavouriteGif with id=" + id
            });
        });
};

// Update a FavouriteGif by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    favouriteGif.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "FavouriteGif was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update FavouriteGif with id=${id}. Maybe FavouriteGif was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating FavouriteGif with id=" + id
            });
        });
};

// Delete a FavouriteGif with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    favouriteGif.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "FavouriteGif was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete FavouriteGif with id=${id}. Maybe FavouriteGif was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete FavouriteGif with id=" + id
            });
        });
};

// Delete all FavouriteGifs from the database.
exports.deleteAll = (req, res) => {
    favouriteGif.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} FavouriteGifs were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all FavouriteGifs."
            });
        });
};

// Find all published FavouriteGifs
exports.findAllPublished = (req, res) => {
    favouriteGif.findAll({ where: { published: true } })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving FavouriteGifs."
            });
        });
};