
const main = ( inputVersion )=>{
    this.inputVersion = inputVersion.split('-')[0];

    this.is = ( diffVersion )=>{

        diffVersion = diffVersion.split('-')[0];

        let _base = inputVersion.split('.');
        let _diff = diffVersion.split('.');

        let longSize = Math.max( _base.length , _diff.length );

        _base = _base.concat( new Array(longSize-_base.length).fill(0) ).map(i=>parseInt(i,10));
        _diff = _diff.concat( new Array(longSize-_diff.length).fill(0) ).map(i=>parseInt(i,10));

        let i = 0;
        while(i<longSize){
            if( _base[i] > _diff[i] ){
                return 'gt';
            }
            if( _base[i] < _diff[i] ){
                return 'lt';
            }
            i++;
        }
        return 'eq';
    }

    this.gt = ( diffVersion )=>{
        return this.is( diffVersion ) === 'gt';
    }
    this.lt = ( diffVersion )=>{
        return this.is( diffVersion ) === 'lt';
    }
    return this;
}

module.exports = main;