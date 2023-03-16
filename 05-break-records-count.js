/*

    Maria plays college basketball and wants to go pro. Each season she maintains a record of her play.
    She tabulates the number of times she breaks her season record for most points and least points in a game. 
    Points scored in the first game establish her record for the season, and she begins counting from there.


                                     Count
    Game  Score  Minimum  Maximum   Min Max
     0      12     12       12       0   0
     1      24     12       24       0   1
     2      10     10       24       1   1
     3      24     10       24       1   1

    Returns:
    An array with the numbers of times she broke her records. Index 0 is for breaking most points records, and index 1 is for breaking least points records.
*/

const scores = [10, 5, 20, 20, 4, 5, 2, 25, 1]

function breakingRecords(scores) {
    let maxScore = scores[0]
    let minScore = scores[0]

    let maxCount = 0
    let minCount = 0

    scores.forEach(score => {
        if (score > maxScore) {
            maxScore = score
            maxCount++
        }
        else if (score < minScore) {
            minScore = score
            minCount++
        }
    })
    console.log([maxCount, minCount])
}

breakingRecords(scores)
