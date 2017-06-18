function solver(baseWithAndHeight, increment) {
    let stone = 0;
    let marble = 0;
    let lapisLazuli = 0;
    let gold = 0;
    let height = 0;
    let cnt = 0;
    while(baseWithAndHeight>2){
        cnt++;
        let totalArea = baseWithAndHeight**2*increment;
        let stoneArea = (baseWithAndHeight-2)**2*increment;
        let outerLayer = totalArea - stoneArea;

        stone+= stoneArea;

        if(cnt%5==0){
            lapisLazuli += outerLayer;
        }else{
            marble += outerLayer;
        }
        height += increment;
        baseWithAndHeight -=2;
    }
    height += increment;
    cnt++;
    gold += baseWithAndHeight**2*increment;

    console.log(`Stone required: ${Math.ceil(stone)}`);
    console.log(`Marble required: ${Math.ceil(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapisLazuli)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${Math.floor(height)}`);
    // console.log(cnt);

}
solver(11, 0.75)
// solver(12,1)
// solver(23,0.5)