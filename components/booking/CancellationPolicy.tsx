const CancellationPolicy = () => (
  <div className="mt-8 bg-white p-6 shadow-md rounded-lg">
    <h2 className="text-xl font-semibold mb-4">Cancellation policy</h2>
    <p className="text-gray-600 leading-relaxed">
      Free cancellation before Aug 23. Cancel before check-in on Aug 24 for a partial refund.
      No refund will be issued for cancellations made after check-in time on Aug 24.
    </p>

    <h2 className="text-xl font-semibold mt-8 mb-4">Ground Rules</h2>
    <ul className="text-gray-600 space-y-2">
      <li className="flex items-start">
        <span className="mr-2">•</span>
        <span>Follow the house rules and be respectful of the property</span>
      </li>
      <li className="flex items-start">
        <span className="mr-2">•</span>
        <span>Treat your Host's home like your own</span>
      </li>
      <li className="flex items-start">
        <span className="mr-2">•</span>
        <span>No smoking inside the property</span>
      </li>
      <li className="flex items-start">
        <span className="mr-2">•</span>
        <span>No parties or events without prior permission</span>
      </li>
      <li className="flex items-start">
        <span className="mr-2">•</span>
        <span>Check-in after 3:00 PM and check-out before 11:00 AM</span>
      </li>
    </ul>
  </div>
);

export default CancellationPolicy;
