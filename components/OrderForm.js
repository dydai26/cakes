function OrderForm() {
    try {
        const [formData, setFormData] = React.useState({
            name: '',
            email: '',
            phone: '',
            address: ''
        });
        const [errors, setErrors] = React.useState({});
        const [isSubmitting, setIsSubmitting] = React.useState(false);

        const handleSubmit = async (e) => {
            e.preventDefault();
            setIsSubmitting(true);
            
            const validationErrors = validateForm(formData);
            if (Object.keys(validationErrors).length > 0) {
                setErrors(validationErrors);
                setIsSubmitting(false);
                return;
            }

            try {
                const order = await trickleCreateObject('order', formData);
                alert('Order submitted successfully!');
                setFormData({ name: '', email: '', phone: '', address: '' });
                setErrors({});
            } catch (error) {
                console.error('Order submission failed:', error);
                alert('Failed to submit order. Please try again.');
            }
            
            setIsSubmitting(false);
        };

        const handleChange = (e) => {
            const { name, value } = e.target;
            setFormData(prev => ({ ...prev, [name]: value }));
            if (errors[name]) {
                setErrors(prev => ({ ...prev, [name]: '' }));
            }
        };

        return (
            <section data-name="order-form-section" className="py-12 bg-gray-50">
                <div className="container max-w-2xl">
                    <div className="form-container p-8">
                        <h2 className="text-2xl font-bold mb-6">Place Your Order</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="space-y-4">
                                <div data-name="form-field">
                                    <label className="block text-sm font-medium mb-1">Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="form-input w-full px-4 py-2 border rounded-lg"
                                        disabled={isSubmitting}
                                    />
                                    {errors.name && <p className="error-message mt-1">{errors.name}</p>}
                                </div>

                                <div data-name="form-field">
                                    <label className="block text-sm font-medium mb-1">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="form-input w-full px-4 py-2 border rounded-lg"
                                        disabled={isSubmitting}
                                    />
                                    {errors.email && <p className="error-message mt-1">{errors.email}</p>}
                                </div>

                                <div data-name="form-field">
                                    <label className="block text-sm font-medium mb-1">Phone</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="form-input w-full px-4 py-2 border rounded-lg"
                                        disabled={isSubmitting}
                                    />
                                    {errors.phone && <p className="error-message mt-1">{errors.phone}</p>}
                                </div>

                                <div data-name="form-field">
                                    <label className="block text-sm font-medium mb-1">Shipping Address</label>
                                    <textarea
                                        name="address"
                                        value={formData.address}
                                        onChange={handleChange}
                                        className="form-input w-full px-4 py-2 border rounded-lg"
                                        rows="3"
                                        disabled={isSubmitting}
                                    ></textarea>
                                    {errors.address && <p className="error-message mt-1">{errors.address}</p>}
                                </div>

                                <button
                                    type="submit"
                                    className="submit-button w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? 'Processing...' : 'Place Order Now'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('OrderForm component error:', error);
        reportError(error);
        return null;
    }
}
