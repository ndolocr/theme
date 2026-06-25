/*==============================================================
    Finserve Dashboard
==============================================================*/
$(document).ready(function () { initializeDashboard(); });

/*==============================================================
    INITIALIZE
==============================================================*/

function initializeDashboard() {
    initializeCharts();
    animateCounters();
    bindSidebar();}

/*==============================================================
    SIDEBAR
==============================================================*/
function bindSidebar() {
    $(".btn-sidebar-toggle").on("click", function () {
        $(".fs-sidebar").toggleClass("collapsed");
        $(".fs-content").toggleClass("expanded");
    });}

/*==============================================================
    KPI COUNTERS
==============================================================*/
function animateCounters() {
    $(".card-stat-number").each(function () {
        let $this = $(this);
        let target = parseInt(
            $this.text().replace(/,/g, "")
        );
        $({ counter: 0 }).animate({
            counter: target
        }, {
            duration: 1500,
            easing: "swing",
            step: function () {
                $this.text(
                    Math.floor(this.counter)
                        .toLocaleString()
                );
            }
        });
    });}

/*==============================================================
    CHARTS
==============================================================*/
function initializeCharts() {
    screeningTrendChart();
    riskDistributionChart();}

/*==============================================================
    SCREENING TREND
==============================================================*/
function screeningTrendChart() {
    const ctx = document
        .getElementById("screeningTrendChart");
    if (!ctx) return;
    new Chart(ctx, {
        type: "line",
        data: {
            labels: [
                "Mon",
                "Tue",
                "Wed",
                "Thu",
                "Fri",
                "Sat",
                "Sun"

            ],
            datasets: [{
                label: "Screenings",
                data: [
                    540,
                    680,
                    720,
                    880,
                    910,
                    640,
                    780
                ],
                fill: true,
                borderWidth: 3,
                tension: .35
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        drawBorder: false
                    }
                },
                x: {
                    grid: {
                        display: false
                    }
                }
            }
        }
    });
}

/*==============================================================
    RISK DISTRIBUTION
==============================================================*/
function riskDistributionChart() {
    const ctx = document
        .getElementById("riskChart");
    if (!ctx) return;
    new Chart(ctx, {
        type: "doughnut",
        data: {
            labels: [
                "High",
                "Medium",
                "Low",
                "Clear"
            ],
            datasets: [{
                data: [
                    27,
                    63,
                    121,
                    4312
                ],
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            cutout: "72%",
            plugins: {
                legend: {
                    position: "bottom"
                }
            }
        }
    });}