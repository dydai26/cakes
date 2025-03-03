function validateForm(data) {
    const errors = {};

    if (!data.name.trim()) {
        errors.name = 'Name is required';
    }

    if (!data.email.trim()) {
        errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
        errors.email = 'Invalid email format';
    }

    if (!data.phone.trim()) {
        errors.phone = 'Phone number is required';
    } else if (!/^\+?[\d\s-]{10,}$/.test(data.phone)) {
        errors.phone = 'Invalid phone number';
    }

    if (!data.address.trim()) {
        errors.address = 'Shipping address is required';
    }

    return errors;
}
