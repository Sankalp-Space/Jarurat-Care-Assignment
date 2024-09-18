const Service = require('../models/serviceModels');

// Add new service
exports.addService = async (req, res) => {
    const { name, description, price } = req.body;

    if (!name && !price) {
        return res.status(400).json({ msg: 'Name and price are required' });
    }

    try {
        const newService = new Service({
            name,
            description,
            price,
        });
        await newService.save();
        res.status(201).json(newService);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get all services
exports.getAllServices = async (req, res) => {
    try {
        const services = await Service.find();
        res.status(200).json(services);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Update a service
exports.updateService = async (req, res) => {
    const { id } = req.params;
    const { name, description, price } = req.body;

    try {
        const updatedService = await Service.findByIdAndUpdate(
            id,
            { name, description, price },
            { new: true }
        );
        if (!updatedService) return res.status(404).json({ msg: 'Service not found' });
        res.status(200).json(updatedService);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Delete a service
exports.deleteService = async (req, res) => {
    const { id } = req.params;

    try {
        const service = await Service.findByIdAndDelete(id);
        if (!service) return res.status(404).json({ msg: 'Service not found' });
        res.status(200).json({ msg: 'Service deleted' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
