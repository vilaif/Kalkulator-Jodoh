$(document).ready(function() {
    $('#calculate').click(function() {
        if ($('#sname').val().trim() === '' || $('#fname').val().trim() === ''){
            return Swal.fire('', 'Please enter both names', 'warning');
        } else{  
            var sname = $('#sname').val();
            var fname = $('#fname').val();
        }

        // Show loading popup
        Swal.fire({
            title: "",
            text: "Fetching data...",
            icon: "info",
            showConfirmButton: false
        });

        $.ajax({
            url: `https://love-calculator.p.rapidapi.com/getPercentage?sname=${sname}&fname=${fname}`,
            type: 'GET',
            headers: {
                'X-RapidAPI-Key': '318a32dfecmshc97faf093036e4dp165c53jsne2e3aab6c7bf',
                'X-RapidAPI-Host': 'love-calculator.p.rapidapi.com'
            },
            success: function(data) {
                console.log(data);

                // Mengupdate informasi yang ditampilkan pada DOM
                $('#percent-love').text(`Love Percentage: ${data.percentage}%`);
                $('#the-result').text(`${data.result}`);

                $('.card-result').show();
                Swal.close();
                // $('#result').html(`<p>Love Percentage: ${data.percentage}%</p><p>${data.result}</p>`);
            },
            error: function(error) {
                console.error('Error:', error);
                $('#result').text('An error occurred. Please try again.');
            }
        });
    });
});