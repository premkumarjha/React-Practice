// import React, { useState } from 'react';

// // Generate mock data
// const generateData = () => {
//   return Array.from({ length: 100 }, (_, i) => ({
//     id: i + 1,
//     name: `Item ${i + 1}`,
//     price: (Math.random() * 100).toFixed(2),
//   }));
// };

// const TableWithPagination = () => {
//   const data = generateData();
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 10;

//   // Pagination logic
//   const totalPages = Math.ceil(data.length / itemsPerPage);
//   const start = (currentPage - 1) * itemsPerPage;
//   const end = start + itemsPerPage;
//   const currentData = data.slice(start, end);

//   return (
//     <div style={{ width: '80%', margin: '2rem auto' }}>
//       <h2>Paginated Table (100 Items)</h2>
//       <table style={{ width: '100%', borderCollapse: 'collapse' }}>
//         <thead>
//           <tr style={{ background: '#f0f0f0' }}>
//             <th style={{ padding: '10px', border: '1px solid #ccc' }}>ID</th>
//             <th style={{ padding: '10px', border: '1px solid #ccc' }}>Name</th>
//             <th style={{ padding: '10px', border: '1px solid #ccc' }}>Price ($)</th>
//           </tr>
//         </thead>
//         <tbody>
//           {currentData.map((item) => (
//             <tr key={item.id}>
//               <td style={{ padding: '10px', border: '1px solid #ccc' }}>{item.id}</td>
//               <td style={{ padding: '10px', border: '1px solid #ccc' }}>{item.name}</td>
//               <td style={{ padding: '10px', border: '1px solid #ccc' }}>{item.price}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       {/* Pagination controls */}
//       <div style={{ marginTop: '1rem', display: 'flex', gap: '1rem' }}>
//         <button onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))} disabled={currentPage === 1}>
//           Previous
//         </button>
//         <span>Page {currentPage} of {totalPages}</span>
//         <button onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))} disabled={currentPage === totalPages}>
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };

// export default TableWithPagination;

import React, { useState, useRef, useCallback, useEffect } from 'react';

const generateMockData = (start, count) =>
  Array.from({ length: count }, (_, i) => ({
    id: start + i,
    name: `Item ${start + i}`
  }));

const InfiniteScrollList = () => {
  const [items, setItems] = useState(() => generateMockData(1, 20));
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);

  const observer = useRef();

  const loadMore = () => {
    setLoading(true);
    setTimeout(() => {
      const nextItems = generateMockData(items.length + 1, 20);
      setItems((prev) => [...prev, ...nextItems]);
      setHasMore(items.length + 20 < 500); // stop after 500 items
      setLoading(false);
    }, 1000); // simulate network delay
  };

  const lastItemRef = useCallback((node) => {
    if (loading) return;
    if (observer.current) observer.current.disconnect();
    
    observer.current = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && hasMore) {
        loadMore();
      }
    });
    
    if (node) observer.current.observe(node);
  }, [loading, hasMore]);

  return (
    <div style={{ width: '400px', margin: '2rem auto', fontFamily: 'sans-serif' }}>
      <h2>Infinite Scroll (React)</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {items.map((item, index) => (
          <li
            key={item.id}
            ref={index === items.length - 1 ? lastItemRef : null}
            style={{
              padding: '10px',
              borderBottom: '1px solid #ccc',
              backgroundColor: index % 2 === 0 ? '#f9f9f9' : '#fff',
            }}
          >
            {item.name}
          </li>
        ))}
      </ul>
      {loading && <p>Loading more...</p>}
      {!hasMore && <p style={{ color: 'green' }}>🎉 All items loaded!</p>}
    </div>
  );
};

export default InfiniteScrollList;
