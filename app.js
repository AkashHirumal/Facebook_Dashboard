let firstDetails = document.getElementById("firstDetails");


fetch("./details.json")
  .then(res => res.json())
  .then(data2 => {


const contentPerformance = data2[3]; 

console.log(contentPerformance);

contentPerformance.topPosts.forEach(post => {
  firstDetails.innerHTML += `
  <div class="col" >
    <div class="card topcrd">
      <div class="row g-0">
        <div class="col-md-4">
          <img src="${post.photo}" class="img-fluid rounded-start topimg" alt="Post">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title topptitle">${post.title}</h5>
            <p class="card-text">
              Engagement: ${post.engagement}
              <i class="bi bi-bar-chart-line-fill"></i>
              <br>
              Reach: ${post.reach}
            </p>
          </div>
        </div>
      </div>
    </div>
</div>
  `;
});

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
        '#0088ff',
        '#0088ff',
        '#0088ff',
        '#0088ff',
        '#0088ff',
        '#0088ff',
        '#0088ff'
      ],
      borderColor: [
        '#000000',
        '#000000',
        '#000000',
        '#000000',
        '#000000',
        '#000000',
        '#000000'
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