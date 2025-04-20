const express = require('express');
const router = express.Router();
const User = require('../models/User');

// PUT /api/users/:id - Update user
router.put('/api/users/:id', async (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;

  // Validate input
  if (!name || !email) {
    return res.status(400).json({ message: 'Name and email are required.' });
  }

  try {
    const updatedUser = await User.findByIdAndUpdate(
      id,
      { name, email },
      { new: true, runValidators: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found.' });
    }

    res.status(200).json({ message: 'User updated successfully.', user: updatedUser });
  } catch (error) {
    res.status(500).json({ message: 'Server error while updating user.', error: error.message });
  }
});

// DELETE /api/users/:id - Soft delete user
router.delete('/api/users/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const deletedUser = await User.findByIdAndUpdate(
      id,
      { isActive: false },
      { new: true }
    );

    if (!deletedUser) {
      return res.status(404).json({ message: 'User not found.' });
    }

    res.status(200).json({ message: 'User soft deleted successfully.', user: deletedUser });
  } catch (error) {
    res.status(500).json({ message: 'Server error while deleting user.', error: error.message });
  }
});

module.exports = router;
