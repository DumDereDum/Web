export class Item {
    name: string;
    sellIn: number;
    quality: number;

    constructor(name, sellIn, quality) {
        this.name = name;
        this.sellIn = sellIn;
        if (quality < 0) {
            this.quality = 0;
        }
        else {
            this.quality = quality;
        }
    
    }
}

export class GildedRose {
    items: Array<Item>;

    constructor(items = [] as Array<Item>) {
        this.items = items;
    }

    updateQuality() {
        for (let item of this.items) {
            let qualityLoss: number = 1;
            let sellInLoss: number = 1;
            let maxQuality = 50;

            switch (item.name) {
                case 'Aged Brie':
                    qualityLoss = -1;
                    break
                case 'Sulfuras, Hand of Ragnaros':
                    continue;
                case 'Backstage passes to a TAFKAL80ETC concert':
                    if (item.sellIn < 0) {
                        qualityLoss = -2
                    }
                    else if (item.sellIn < 6) {
                        qualityLoss = -3
                    }
                    else if (item.sellIn < 11) {
                        qualityLoss = -2
                    }
                    else {
                        qualityLoss = -1
                    }
                    break
                case 'Conjured Mana Cake':
                    qualityLoss *= 2
                    break   
            }
            if (item.sellIn < 0) {
                qualityLoss *= 2
            }
            item.quality -= qualityLoss
            item.sellIn -= sellInLoss
            item.quality = Math.max(Math.min(item.quality, maxQuality), 0);
        }

        return this.items;
    }
}
