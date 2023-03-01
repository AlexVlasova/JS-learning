let styles = ['Jazz', 'Blues'];
styles.push('Rock-n-roll');
styles[Math.trunc(styles.length / 2)] = 'Classic';
console.log(styles);
console.log(styles.shift());
styles.unshift('Rap', 'Raggey');