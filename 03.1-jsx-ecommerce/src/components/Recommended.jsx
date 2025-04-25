const Recommended = ({ handleClick }) => {
  const companies = ["", "Nike", "Adidas", "Puma", "Vans"];
  
  return (
    <div>
      <h2 className="mb-3 text-xl font-semibold text-secondary">Recommended</h2>
      <div className="flex flex-wrap gap-3" style={{ gap: '0.75rem' }}>
        {companies.map((company) => (
          <button
            key={company || "all"}
            onClick={() => handleClick({ target: { value: company } })}
            className="btn hover:shadow-md"
          >
            {company || "All Products"}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Recommended; 