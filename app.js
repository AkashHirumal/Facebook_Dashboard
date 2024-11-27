let firstDetails = document.getElementById("firstDetails");




fetch("./details.json")
  .then(res => res.json())
  .then(data2 => {

    const followerGrowth = data2[0];
    const followerDetails = document.getElementById("followerDetails");

    followerDetails.innerHTML = '';

    followerGrowth.metrics.forEach(metric => {
      followerDetails.innerHTML += `
        <div class="col-md-6 mb-3">
          <div class="card border-primary h-100">
            <div class="card-body text-primary">
              <h5 class="card-title">${metric.name}</h5>
              <h4 class="card-text">${metric.value}<span> <i class="bi bi-graph-up"></i></span></h4><br>
              <p class="card-text presentagemat"><span><i class="bi bi-arrow-up-short"></i></span>${metric.change}</p>
            </div>
          </div>
        </div>
      `;
    });

const contentPerformance = data2[3]; 

console.log(contentPerformance);

contentPerformance.topPosts.forEach(post => {
  firstDetails.innerHTML += `
  <div class="col" >
    <div class="card topcrd">
      <div class="row g-0">
        <div class="col-md-12">
          <img src="${post.photo}" class="img-fluid rounded-start topimg" alt="Post">
        </div>
        <div class="col-md-12">
          <div class="card-body">
            <h5 class="card-title topptitle">${post.title}</h5>
            <p class="card-text">
              Engagement: ${post.engagement}
              <i class="bi bi-bar-chart-line-fill"></i>
              <br><br>
              Reach: ${post.reach}
              <i class="bi bi-heart-fill"></i>
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
                '#0088ff',
                '#0088ff',
                '#0088ff',
                '#0088ff',
                '#0088ff',
                '#0088ff',
                '#0088ff'
              ],
              borderColor: [
                '#0088ff',
                '#0088ff',
                '#0088ff',
                '#0088ff',
                '#0088ff',
                '#0088ff',
                '#0088ff'
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