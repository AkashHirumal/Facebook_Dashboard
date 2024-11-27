
fetch("./soc.json")
  .then(res => res.json())
  .then(data2 => {

    console.log(data2);

    const cmonth = data2[1].month; 
    const ufollowers = data2[1].followers;

    console.log(cmonth, ufollowers);
  
const ctx = document.getElementById('myChart');
      
new Chart(ctx, {
  type: 'bar',
  data: {
    labels: cmonth,
    datasets: [{
      label: 'Display',
      data: ufollowers,
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 205, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(201, 203, 207, 0.2)'
      ],
      borderColor: [
        'rgb(255, 99, 132)',
        'rgb(255, 159, 64)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
        'rgb(54, 162, 235)',
        'rgb(153, 102, 255)',
        'rgb(201, 203, 207)'
      ],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});


    const bestTimes = data2[4].recommendations;
    
    const days = bestTimes.map(eliement => eliement.day);
    const timeSlots = bestTimes.map(eliement => eliement.time);
    
    console.log(days, timeSlots);

        const ctx2 = document.getElementById('myChart2');
      
        new Chart(ctx2, {
          type: 'line',
          data: {
            labels: days,
            datasets: [{
                label: 'Display',
              data: timeSlots,
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 205, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(201, 203, 207, 0.2)'
              ],
              borderColor: [
                'rgb(255, 99, 132)',
                'rgb(255, 159, 64)',
                'rgb(255, 205, 86)',
                'rgb(75, 192, 192)',
                'rgb(54, 162, 235)',
                'rgb(153, 102, 255)',
                'rgb(201, 203, 207)'
              ],
              borderWidth: 5
            }]
          },
          options: {
            scales: {
              y: {
                beginAtZero: true
              }
            }
          }
        });
        
  });