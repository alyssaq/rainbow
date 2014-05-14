module.exports = {
  compress: {
    report: 'min',
    src: ['<%= source %>/**/*.css'],
    dest: '<%= production %>/styles/site.css'
  }
};